using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace QxAPI.Models {
    public class JobContext : DbContext{
        public JobContext(DbContextOptions<JobContext> options): base(options){
            ChangeTracker.QueryTrackingBehavior=QueryTrackingBehavior.NoTracking;
        }
        public DbSet<Job> Jobs { get; }
    }
}