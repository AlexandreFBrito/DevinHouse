using Business.Entities;

namespace Business
{
    class Program
    {
        static void Main(string[] args)
        {
            /* Account acc = new Account(1001, "Alex", 0.0);
            BusinessAccount bacc = new BusinessAccount(1002, "Maria", 0.00, 500.00);

            //UPCASTING
            Account acc1 = bacc;
            Account acc2 = new BusinessAccount(1003, "Bob", 0.0, 200.0);
            Account acc3 = new SavingsAccount(1004, "Anna", 0.0, 0.01);

            //DONWCASTING
            BusinessAccount acc4 = (BusinessAccount)acc2;
            //acessando o loan pq o acc4 é um businessaccount
            acc4.Loan(100.0);
            
            //Não ´é possivel converter um Savingsaccount em businessaccount
            //BusinessAccount acc5 = (BusinessAccount)acc3;

            //Testar instancias
            if (acc3 is BusinessAccount)
            {
                //Não é uma instancia de BusinessAccount
                //1 forma de CASTING
                //BusinessAccount acc5 = (BusinessAccount)acc3;

                //2 forma de CASTING
                BusinessAccount acc5 = acc3 as BusinessAccount;

                acc5.Loan(200.0);
                Console.WriteLine("Loan!");
            }
            //Testar instancias
            if (acc3 is SavingsAccount)
            {
                //é uma instancia de SavingsAccount
                //SavingsAccount acc5 = (SavingsAccount)acc3;
                SavingsAccount acc5 = acc3 as SavingsAccount;
                acc5.UpdateBalance();
                Console.WriteLine("Update!");
            }

            Account acc1 = new Account(1001, "Alex", 500.00);
            Account acc2 = new SavingsAccount(1002, "Anna", 500.00, 0.01);

            acc1.Withdraw(10.0);
            acc2.Withdraw(10.0);

            Console.WriteLine(acc1.Balance);
            Console.WriteLine(acc2.Balance);

            */

            //Classes abstratas
            List<Account> list = new List<Account>();

            list.Add(new SavingsAccount(1001, "Alex", 500.0, 0.01));
            list.Add(new BusinessAccount(1002, "maria", 500.0, 400.0));
            list.Add(new SavingsAccount(1003, "Bob", 500.0, 0.01));
            list.Add(new BusinessAccount(1004, "Anna", 500.0, 400.0));

            double sum = 0;

            //Somando todas as contas
            foreach (Account acc in list)
            {
                sum += acc.Balance;
            }

            Console.WriteLine(sum.ToString("F2"));

            //para cada conta sacar R$10
            foreach (Account acc in list)
            {
                acc.Withdraw(10.0);
            }

            //Imprimir contas atualizadfas
            foreach (Account acc in list)
            {
                Console.WriteLine("updates account: "+ acc.Balance.ToString("F2"));
            }
        }

    }
}