namespace Calculadora
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnUm_Click(object sender, EventArgs e)
        {
            if (_loading2)
            {
                lbResult.Text = "0";
                _loading2 = false;
            }
            if (double.Parse(lbResult.Text) > 0)
            {
                lbResult.Text = lbResult.Text + btnUm.Text;
            }
            else
            {
                lbResult.Text = btnUm.Text;
            }
            
        }

        private void btnDois_Click(object sender, EventArgs e)
        {
            if (_loading2)
            {
                lbResult.Text = "0";
                _loading2 = false;
            }
            if (double.Parse(lbResult.Text) > 0)
            {
                lbResult.Text = lbResult.Text + btnDois.Text;
            }
            else
            {
                lbResult.Text = btnDois.Text;
            }
        }

        private void btnTres_Click(object sender, EventArgs e)
        {
            if (_loading2)
            {
                lbResult.Text = "0";
                _loading2 = false;
            }
            if (double.Parse(lbResult.Text) > 0)
            {
                lbResult.Text = lbResult.Text + btnTres.Text;
            }
            else
            {
                lbResult.Text = btnTres.Text;
            }
        }

        private void btnQuatro_Click(object sender, EventArgs e)
        {
            if (_loading2)
            {
                lbResult.Text = "0";
                _loading2 = false;
            }
            if (double.Parse(lbResult.Text) > 0)
            {
                lbResult.Text = lbResult.Text + btnQuatro.Text;
            }
            else
            {
                lbResult.Text = btnQuatro.Text;
            }
        }

        private void btnCinco_Click(object sender, EventArgs e)
        {
            if (_loading2)
            {
                lbResult.Text = "0";
                _loading2 = false;
            }
            if (double.Parse(lbResult.Text) > 0)
            {
                lbResult.Text = lbResult.Text + btnCinco.Text;
            }
            else
            {
                lbResult.Text = btnCinco.Text;
            }
        }

        private void btnSeis_Click(object sender, EventArgs e)
        {
            if (_loading2)
            {
                lbResult.Text = "0";
                _loading2 = false;
            }
            if (double.Parse(lbResult.Text) > 0)
            {
                lbResult.Text = lbResult.Text + btnSeis.Text;
            }
            else
            {
                lbResult.Text = btnSeis.Text;
            }
        }

        private void btnSete_Click(object sender, EventArgs e)
        {
            if (_loading2)
            {
                lbResult.Text = "0";
                _loading2 = false;
            }
            if (double.Parse(lbResult.Text) > 0)
            {
                lbResult.Text = lbResult.Text + btnSete.Text;
            }
            else
            {
                lbResult.Text = btnSete.Text;
            }
        }

        private void btnOito_Click(object sender, EventArgs e)
        {
            if (_loading2)
            {
                lbResult.Text = "0";
                _loading2 = false;
            }
            if (double.Parse(lbResult.Text) > 0)
            {
                lbResult.Text = lbResult.Text + btnOito.Text;
            }
            else
            {
                lbResult.Text = btnOito.Text;
            }
        }

        private void btnNove_Click(object sender, EventArgs e)
        {
            if (_loading2)
            {
                lbResult.Text = "0";
                _loading2 = false;
            }
            if (double.Parse(lbResult.Text) > 0)
            {
                lbResult.Text = lbResult.Text + btnNove.Text;
            }
            else
            {
                lbResult.Text = btnNove.Text;
            }
        }

        private void btnZero_Click(object sender, EventArgs e)
        {
            if (_loading2)
            {
                lbResult.Text = "0";
                _loading2 = false;
            }
            if (double.Parse(lbResult.Text) > 0)
            {
                lbResult.Text = lbResult.Text + btnZero.Text;
            }
        }

        private void btnSomar_Click(object sender, EventArgs e)
        {
            if (double.Parse(lbResult.Text) > 0)
            {                                      
                if (_loading)
                {
                    lbExpressao.Text = lbExpressao.Text + lbResult.Text + btnSomar.Text;
                    calc.Memoria1 = float.Parse(lbResult.Text);
                    calc.Memoria2 = 0;
                    calc.Operacao = btnSomar.Text;
                    _loading = false;
                    lbResult.Text = "0";
                }
                else
                {
                    calc.Memoria2 = float.Parse(lbResult.Text);
                    lbResult.Text = calc.Resultado();
                    lbExpressao.Text = lbResult.Text + btnSomar.Text;
                    calc.Memoria1 = float.Parse(lbResult.Text);
                    _loading2 = true;
                }
                
            }
        }

        private void btnSub_Click(object sender, EventArgs e)
        {
            if (double.Parse(lbResult.Text) > 0)
            {
                
                if (_loading)
                {
                    lbExpressao.Text = lbExpressao.Text + lbResult.Text + btnSub.Text;
                    calc.Memoria1 = float.Parse(lbResult.Text);
                    calc.Memoria2 = 0;
                    calc.Operacao = btnSub.Text;
                    _loading = false;
                    lbResult.Text = "0";
                }
                else
                {
                    calc.Memoria2 = float.Parse(lbResult.Text);
                    lbResult.Text = calc.Resultado();
                    lbExpressao.Text = lbResult.Text + btnSub.Text;
                    calc.Memoria1 = float.Parse(lbResult.Text);
                    _loading2 = true;
                }
            }
        }

        private void btnMult_Click(object sender, EventArgs e)
        {
            if (double.Parse(lbResult.Text) > 0)
            {
                
                if (_loading)
                {
                    lbExpressao.Text = lbExpressao.Text + lbResult.Text + btnMult.Text;
                    calc.Memoria1 = float.Parse(lbResult.Text);
                    calc.Memoria2 = 0;
                    calc.Operacao = btnMult.Text;
                    _loading = false;
                    lbResult.Text = "0";
                }
                else
                {
                    calc.Memoria2 = float.Parse(lbResult.Text);
                    lbResult.Text = calc.Resultado();
                    lbExpressao.Text = lbResult.Text + btnMult.Text;
                    calc.Memoria1 = float.Parse(lbResult.Text);
                    _loading2 = true;
                }
            }
        }

        private void btnDiv_Click(object sender, EventArgs e)
        {
            if (double.Parse(lbResult.Text) > 0)
            {
                lbExpressao.Text = lbExpressao.Text + lbResult.Text + btnDiv.Text;
                if (_loading)
                {
                    calc.Memoria1 = float.Parse(lbResult.Text);
                    calc.Memoria2 = 0;
                    calc.Operacao = btnDiv.Text;
                    _loading = false;
                    lbResult.Text = "0";
                }
                else
                {
                    calc.Memoria2 = float.Parse(lbResult.Text);
                    lbResult.Text = calc.Resultado();
                    calc.Memoria1 = float.Parse(lbResult.Text);
                    _loading2 = true;
                }
            }
        }

        private void btnTotal_Click(object sender, EventArgs e)
        {
            if (_loading == false)
            {
                calc.Memoria2 = float.Parse(lbResult.Text);
                lbExpressao.Text = calc.Memoria2.ToString() + calc.Operacao + calc.Memoria1.ToString() + btnTotal.Text;
                lbResult.Text = calc.Resultado();                
                _loading2 = true;
            }
        }

        private void btnVirgula_Click(object sender, EventArgs e)
        {
            if (!_virgula) {
                if (_loading2)
                {
                    lbResult.Text = "0";
                    _loading2 = false;
                }
                lbResult.Text = lbResult.Text + btnVirgula.Text;
                _virgula = true;
            }
        }
    }
}