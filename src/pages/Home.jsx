import React, { useEffect } from 'react';
import AOS from 'aos';
import {Link} from 'react-router-dom';
import 'aos/dist/aos.css';
import '../style.css'; // Se o style.css estiver em src. Ajuste o caminho se estiver em outro lugar

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <nav>
        <img src="/images/logojpg.png" alt="Logo" />
        <div className="sections">
          <Link to="/">Página Inicial</Link>
          <Link to="/investments">Investimentos</Link>
          <Link to="/contact">Contato</Link>
        </div>
      </nav>

      <div className="grid">
        <div className="area1">
          <div data-aos="fade-right">
            Simule os seus investimentos na Japaguei
            <button id="simbutton">Simular agora</button>
          </div>
          <img src="/images/logo2.png" alt="Logo 2" data-aos="fade-left" />
        </div>

        <div className="area2" data-aos="fade-up">
          <div>
            <h2>Seguros Japaguei</h2>
            Nossas apólices de seguro cobrem os seus gastos sendo eles com: problemas de saúde e acidentes.
            <button id="simbutton">Simular Agora</button>
          </div>
          <img src="/images/logo3.png" alt="Logo 3" />
        </div>

        <div className="area3" data-aos="fade-up">
          <img src="/images/logo4.png" alt="Logo 4" />
          <div className="investsection">
            <p>Temos Investimentos para TODOS os públicos!</p>
            <div className="divisory">
              {/* Conservador */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ color: '#FFB800' }}>Conservador</h1>
                <div className="divtext">
                  <h3 style={{ fontSize: '99%' }}>CDB DO BANCO INTER</h3>
                  <div className="whitediv">Renda Fixa</div>
                  <div className="whitediv_bottomtext">
                    CDB é a sigla para Certificado de Depósito Bancário, e é um título de Renda Fixa emitido por bancos
                    para captar recursos. Na prática, é como se você emprestasse o seu dinheiro para o banco e, em
                    troca, ele lhe pagasse juros ao final do período combinado.
                  </div>
                </div>
                <button className="investbutton">Invista Agora</button>
              </div>

              {/* Moderado */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ color: '#FFB800' }}>Moderado</h1>
                <div className="divtext">
                  <h3 style={{ fontSize: '99%' }}>FUNDOS DE INVESTIMENTO</h3>
                  <div className="whitediv">Renda Variável</div>
                  <div className="whitediv_bottomtext">
                    Um fundo de investimento é uma forma de aplicação financeira, formada pela união de vários
                    investidores que se juntam para a realização de um investimento financeiro, não possuindo
                    personalidade
                  </div>
                </div>
                <button className="investbutton">Invista Agora</button>
              </div>
            </div>
          </div>
        </div>

        <footer data-aos="fade-down">
          <img src="/images/Group 7.png" alt="Logo Footer" />
          <div className="rights">@2023 Japaguei. Todos os direitos reservados</div>
          <div className="adress">
            <h2>Endereço</h2>
            Wall Street 2469, Estados Unidos
            <br />
            (9)928332-2232
          </div>
        </footer>
      </div>
    </>
  );
}
