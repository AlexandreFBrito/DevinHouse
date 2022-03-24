using Market.Entities.Enums;
using System.Text;
using System.Globalization;
namespace Market.Entities
{
    internal class Order
    {
        public DateTime Moment { get; set; }
        public OrderStatus Status { get; set; }
        public Client Client { get; set; }
        public List<OrderItem> List { get; set; } = new List<OrderItem>();

        public Order()
        {

        }

        public Order(DateTime moment, OrderStatus status, Client client)
        {
            Moment = moment;
            Status = status;
            Client = client;
        }

        public void AddItem(OrderItem item)
        {
            List.Add(item);
        }
        public void RemoveItem(OrderItem item)
        {
            List.Remove(item);
        }

        public double Total()
        {
            double sum = 0.0;
            foreach (OrderItem item in List)
            {
                sum += item.SubTotal();                 
            }
            return sum;
        }
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("Order moment: "+Moment.ToString("dd/MM/yyyy HH:mm:ss"));
            sb.AppendLine("OrderStatus: "+ Status);
            sb.AppendLine("Client: " + Client);
            sb.AppendLine("Order Items: ");

            foreach (OrderItem item in List)
            {
                sb.AppendLine(item.ToString());
            }
            sb.AppendLine("Total price: $"+ Total().ToString("F2", CultureInfo.InvariantCulture));
            return sb.ToString();
        }
    }
}
