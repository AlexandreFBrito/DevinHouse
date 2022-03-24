namespace Business.Entities
{
    //Herdando da classe account todos os métodos e atributos
    internal class BusinessAccount : Account
    {
        public double LoanLimit { get; set; }

        public BusinessAccount()
        {

        }
        //aciona o construtor do account com o base e chama o contrutor da classe passando os paramentros
        public BusinessAccount(int number, string holder, double balance, double loanlimit) 
            : base(number, holder, balance)
        {
            LoanLimit = loanlimit;
        }

        public void Loan(double amount)
        {
            if(amount < LoanLimit)
            {
                Balance += amount;
            }
            
        }
    }
}
