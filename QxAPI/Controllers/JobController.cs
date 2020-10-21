using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace QxAPI.Controllers {
    [Route("api/Jobs")]
    [ApiController]
    public class JobsController : ControllerBase {
        private readonly JobContext _context;

        public JobsController(JobContext context){
            _context = context;
        }

        // GET: api/Jobs/10-01-2020/10-05-2020
        [HttpGet("{startDate}/{endDate}")]
        public async Task<ActionResult<Job>> GetJobsByDate(DateTime startDate, DateTime endDate){
            var jobs = await _context.Jobs.ToListAsync(startDate, endDate);

            if (jobs == null){
                return NotFound();
            }

            return jobs;
        }

        // GET: api/Jobs/1451 Halsey
        [HttpGet("{address}")]
        public async Task<ActionResult<Job>> GetJobsByAddress(string address){
            var jobs = await _context.Jobs.ToListAsync(address);

            if (jobs == null){
                return NotFound();
            }

            return jobs;
        }
    }

    
}