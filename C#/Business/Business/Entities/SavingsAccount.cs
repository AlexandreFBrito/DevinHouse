namespace Business.Entities
{
    internal class SavingsAccount : Account
    {
        
        public double InterestRate { get; set; }

        public SavingsAccount(){

        }

        public SavingsAccount(int number, string holder, double balance, double interestRate) 
            : base(number, holder, balance)
        {
            InterestRate = interestRate;
        }

        public void UpdateBalance()
        {
            Balance += Balance * InterestRate;  
        }

        //Sobrescrever o método da classe account marcado com virtual
        public override void Withdraw(double amount)
        {
            //Sem taxa, metodo de sobrescrita
            //Balance -= amount;

            //com taxa adicional utilizando a palavra base
            base.Withdraw(amount);
            Balance -= 2.0;
            //Descontando R$7
        }
    }
}
