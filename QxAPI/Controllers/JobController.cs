using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QxAPI.Models;

namespace QxAPI.Controllers {
    [Route("api/Jobs")]
    [ApiController]
    public class JobsController : ControllerBase {
        private readonly JobContext _context;

        public JobsController(JobContext context){
            _context = context;
        }

        // GET: api/Jobs/10-01-2020/10-05-2020/Rough
        [HttpGet("{startDate}/{endDate}/{stage}")]
        public async Task<IEnumerable<Job>> GetJobsByDate(DateTime startDate, DateTime endDate, string stage) => await _context.Jobs.Where(j => j.Job_Date >= startDate && j.Job_Date <= endDate && j.Job_Stage == stage).ToListAsync();

        // GET: api/Jobs/1451 Halsey
        [HttpGet("{address}")]
        public async Task<IEnumerable<Job>> GetJobsByAddress(string address) =>  await _context.Jobs.Where(j => j.Job_Site.Contains(address)).ToListAsync();

        // GET: api/Jobs/1451 Halsey/10-01-2020/10-05-2020/Rough
        [HttpGet("{address}/{startDate}/{endDate}/{stage}")]
        public async Task<IEnumerable<Job>> GetJobsByAll(string address, DateTime startDate, DateTime endDate, string stage) => await _context.Jobs.Where(j => j.Job_Site.Contains(address) && j.Job_Date >= startDate && j.Job_Date <= endDate && j.Job_Stage == stage).ToListAsync();

    }

    
}