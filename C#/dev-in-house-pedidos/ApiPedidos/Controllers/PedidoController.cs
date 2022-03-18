using Microsoft.AspNetCore.Mvc;

namespace ApiPedidos.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PedidoController : ControllerBase
    {
        private readonly ILogger<PedidoController> _logger;

        public PedidoController(ILogger<PedidoController> logger)
        {
            _logger = logger;
        }

        [HttpGet("Teste")]
        public IActionResult Teste()
        {
            return Ok("Hello world");
        }
    }
}