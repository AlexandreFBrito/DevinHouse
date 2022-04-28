using SalesWebMVC.Models;
using SalesWebMVC.Models.Enums;

namespace SalesWebMVC.Data
{
    public class SeedingService
    {
        private SalesWebMVCContext _context;
        
        public SeedingService(SalesWebMVCContext context)
        {
            _context = context;
        }

        public void Seed()
        {
            if (_context.Department.Any() || _context.Seller.Any() || _context.Department.Any())
            {
                return; //Db já foi populado
            }

            Department d1 = new Department(1, "Computers");
            Department d2 = new Department(2, "Eletronics");
            Department d3 = new Department(3, "Fashion");
            Department d4 = new Department(4, "Books");

            Seller s1 = new Seller(1, "Bob Brown", "Bob@gmail.com", new DateTime(1998, 4, 21), 1000.00, d1);

            SalesRecord r1 = new SalesRecord(1, new DateTime(2018, 09, 25), 1100.00, SaleStatus.Billed, s1);
            SalesRecord r2 = new SalesRecord(1, new DateTime(2018, 09, 26), 2200.00, SaleStatus.Billed, s1);

            _context.Department.AddRange(d1, d2, d3, d4);

            _context.Seller.AddRange(s1);

            _context.SalesRecord.AddRange(r1, r2);

            _context.SaveChanges();

        }
    }
}
