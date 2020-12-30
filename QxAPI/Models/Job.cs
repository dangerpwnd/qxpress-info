using System;
using System.ComponentModel.DataAnnotations.Schema;

public class Job {
    public DateTime Job_Date { get; set; }
    public string Job_Builder {get; set;}
    public string Job_Address { get; set; }
    public string Job_City { get; set; }
    public string Job_Postal {get; set;}
    public string Job_Stage { get; set; }
    
}