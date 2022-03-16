using System.Media;

namespace TesteMatematica
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void numericUpDown3_ValueChanged(object sender, EventArgs e)
        {

        }

        private void numericUpDown2_ValueChanged(object sender, EventArgs e)
        {

        }

        private void numericUpDown1_ValueChanged(object sender, EventArgs e)
        {

        }

        private void sum_ValueChanged(object sender, EventArgs e)
        {

        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void label8_Click(object sender, EventArgs e)
        {

        }

        private void label12_Click(object sender, EventArgs e)
        {

        }

        private void label13_Click(object sender, EventArgs e)
        {

        }

        private void label9_Click(object sender, EventArgs e)
        {

        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void plusRightLabel_Click(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void label6_Click(object sender, EventArgs e)
        {

        }

        private void label10_Click(object sender, EventArgs e)
        {

        }

        private void label14_Click(object sender, EventArgs e)
        {

        }

        private void label15_Click(object sender, EventArgs e)
        {

        }

        private void label11_Click(object sender, EventArgs e)
        {

        }

        private void label7_Click(object sender, EventArgs e)
        {

        }

        private void plusLeftLabel_Click(object sender, EventArgs e)
        {

        }

        private void startButton_Click(object sender, EventArgs e)
        {
            StartTheQuiz();
            startButton.Enabled = false;
            sum.Enabled = true;
            difference.Enabled = true;
            product.Enabled = true;
            quotient.Enabled = true;
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            if (CheckTheAnswer())
            {
                // If CheckTheAnswer() returns true, then the user 
                // got the answer right. Stop the timer  
                // and show a MessageBox.
                timer1.Stop();
                MessageBox.Show("você acertou todas as respostas!",
                                "Parabéns!");
                startButton.Enabled = true;
                timeLabel.BackColor = SystemColors.Control;
                sum.Enabled = false;
                difference.Enabled = false;
                product.Enabled = false;
                quotient.Enabled = false;
            }
            else if (timeLeft > 0)
            {
                // If CheckTheAnswer() returns false, keep counting
                // down. Decrease the time left by one second and 
                // display the new time left by updating the 
                // Time Left label.
                timeLeft = timeLeft - 1;
                timeLabel.Text = timeLeft + " Segundos";
                
            }
            else
            {
                // If the user ran out of time, stop the timer, show
                // a MessageBox, and fill in the answers.
                timer1.Stop();
                timeLabel.Text = "Acabou o tempo!";
                MessageBox.Show("Você não terminou a tempo.", "Desculpe!");
                sum.Value = addend1 + addend2;
                difference.Value = minuend - subtrahend;
                product.Value = multiplicand * multiplier;
                quotient.Value = dividend / divisor;
                startButton.Enabled = true;
                timeLabel.BackColor = SystemColors.Control;
                sum.Enabled = false;
                difference.Enabled = false;
                product.Enabled = false;
                quotient.Enabled = false;
            }
            if (timeLeft <= 5)
            {
                timeLabel.BackColor = Color.Red;
            }
        }

        private void difference_Validating(object sender, System.ComponentModel.CancelEventArgs e)
        {

        }

        private void difference_ValueChanged(object sender, EventArgs e)
        {

        }

        private void sum_Leave(object sender, EventArgs e)
        {
            if (addend1 + addend2 == sum.Value)
            {
                SoundPlayer simpleSound = new SoundPlayer("./sucess.wav");
                simpleSound.Play();
                sum.BackColor = Color.Green;
            }
            else
            {
                SoundPlayer simpleSound = new SoundPlayer("./error.wav");
                simpleSound.Play();
                sum.BackColor = Color.Red;
            }
        }

        private void difference_Leave(object sender, EventArgs e)
        {
            if (minuend - subtrahend == difference.Value)
            {
                //SystemSounds.Beep.Play();
                SoundPlayer simpleSound = new SoundPlayer("./sucess.wav");
                simpleSound.Play();
                difference.BackColor = Color.Green;
            }
            else
            {
                SoundPlayer simpleSound = new SoundPlayer("./error.wav");
                simpleSound.Play();
                difference.BackColor = Color.Red;
            }
        }

        private void product_Leave(object sender, EventArgs e)
        {
            if (multiplicand * multiplier == product.Value)
            {
                SoundPlayer simpleSound = new SoundPlayer("./sucess.wav");
                simpleSound.Play();
                product.BackColor = Color.Green;
            }
            else
            {
                SoundPlayer simpleSound = new SoundPlayer("./error.wav");
                simpleSound.Play();
                product.BackColor = Color.Red;
            }
        }

        private void quotient_Leave(object sender, EventArgs e)
        {
            if (dividend / divisor == quotient.Value)
            {
                SoundPlayer simpleSound = new SoundPlayer("./sucess.wav");
                simpleSound.Play();
                quotient.BackColor = Color.Green;
            }
            else
            {
                SoundPlayer simpleSound = new SoundPlayer("./error.wav");
                simpleSound.Play();
                quotient.BackColor = Color.Red;
            }
        }
    }
}