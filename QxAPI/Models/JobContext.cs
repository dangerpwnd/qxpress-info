using Microsoft.EntityFrameworkCore;

namespace QxAPI.Models {
    public class JobContext : DbContext{
        public JobContext(DbContextOptions<JobContext> options): base(options){
            ChangeTracker.QueryTrackingBehavior=QueryTrackingBehavior.NoTracking;
        }
        public DbSet<Job> Jobs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<Job>(eb => {
                eb.HasNoKey();
                eb.ToView("QXInfo");
                eb.Property(v => v.Job_Date).HasColumnName("Job_Date");
                eb.Property(v => v.Job_Builder).HasColumnName("Job_Builder");
                eb.Property(v => v.Job_Address).HasColumnName("Job_Address");
                eb.Property(v => v.Job_City).HasColumnName("Job_City");
                eb.Property(v => v.Job_Postal).HasColumnName("Job_Postal");
                eb.Property(v => v.Job_Stage).HasColumnName("Job_Descrip");
            });
        }
    }
}