using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace QxAPI.Models {
    public class JobContext : DbContext{
        public JobContext(DbContextOptions<JobContext> options): base(options){
            ChangeTracker.QueryTrackingBehavior=QueryTrackingBehavior.NoTracking;
        }
        public DbSet<Job> Jobs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<Job>(eb => {
                eb.HasNoKey();
                eb.ToView("qryRpt_AllSchedItems1");
                eb.Property(v => v.Job_Date).HasColumnName("Job_Date");
                eb.Property(v => v.Job_Site).HasColumnName("JobSiteFileName");
                eb.Property(v => v.Job_Stage).HasColumnName("Job_Description");
                eb.Property(v => v.Job_City).HasColumnName("JobSiteLine2");
            });
        }
    }
}