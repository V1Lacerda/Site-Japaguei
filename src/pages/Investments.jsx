import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import '../investstyle.css';

export default function Investments() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <nav>
        <img src="/images/logojpg.png" />
        <div className="sections">
          <Link to={"/"}>Página Inicial</Link>

          <Link to={"/investments"}>Investimentos</Link>

          <Link to={"/contact1"}>Contato</Link>
        </div>
      </nav>

      <div className="grid">
        <div className="leftarea">
          <h2>CDB LIQUIDEZ DIARIA</h2>
          <h3>Rende 100% do CDI!</h3>
          <p>
            CDB é a sigla para Certificado de Depósito Bancário, e é um título
            de Renda Fixa emitido por bancos para captar recursos.
            <br />
            Na prática, é como se você emprestasse o seu dinheiro para o banco
            e, em troca, ele lhe pagasse juros ao final do período combinado.
          </p>
          <div className="calculator">
            <h1>Calculadora de investimentos</h1>
            <label>
              Valor que deseja investir:
              <input placeholder="Digite o valor aqui" type="number" />
            </label>
            <br />
            <label>
              Tempo que deseja deixar investindo (meses):
              <select id="meses" name="meses">
                <option>Selecione:</option>
                <option value="1">1 mês</option>
                <option value="2">2 meses</option>
                <option value="3">3 meses</option>
                <option value="4">4 meses</option>
                <option value="5">5 meses</option>
                <option value="6">6 meses</option>
                <option value="7">7 meses</option>
                <option value="8">8 meses</option>
                <option value="9">9 meses</option>
                <option value="10">10 meses</option>
                <option value="11">11 meses</option>
                <option value="12">12 meses</option>
              </select>
            </label>
            <button type="submit">Calcular</button>
          </div>
          <div className="results">
            <div className="topdiv" style={{height: '50%'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1vh'}}>
                Valor Inicial:<div className="value" id="startvalue"></div>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1vh'}}>
                Tempo:<div className="value" id="timevalue"></div>
              </div>
            </div>
            <div className="bottomdiv" style={{height: '50%'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1vh'}}>
                Rendimento:<div className="value" id=""></div>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1vh'}}>
                Valor Total:<div className="value" id=""></div>
              </div>
            </div>
          </div>
        </div>

        <div className="rightarea">
          <img src="/images/logointer.png" />
        </div>
      </div>
    </>
  );
}
