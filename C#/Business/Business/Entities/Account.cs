namespace Business.Entities
{
    //Abstração, classes não podem ser instanciadas. Utiliza para garantir a herança total
    //Só pode instanciar objetos do tipo da subclasse
    abstract class Account
    {
        public int Number { get; set; }
        public string Holder { get; set; }
        public double Balance { get; set; }

        public Account()
        {

        }

        public Account(int number, string holder, double balance)
        {
            Number = number;
            Holder = holder;
            Balance = balance;
        }

        //utilizando sobreposição, virtual, override, virtual
        public virtual void Withdraw(double amount)
        {
            //metodo pode ser sobrescrito
            Balance -= amount + 5.0;
            //Balance -= amount;
        }
        public void Deposit(double amount)
        {
            Balance += amount;
        }
    }
}
