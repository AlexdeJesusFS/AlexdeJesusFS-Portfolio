import { Section, ContainerCards, ColumnCards } from "./styles";
import EllipesesBackground from "./EllipsesBackground";
import Card from "../../../../components/Card";
import CardTag from "../../../../components/Card/Tag";
import { 
  htmlIcon, cssIcon, tsIcon, figmaIcon, reactIcon, pythonIcon, apiIcon, sqlserverIcon
} from "../../../../assets/dev-icon-tags/index"; 


function ProjectsSection() {
    return (
      <Section>
          <EllipesesBackground className="ellipses-background"/>
          <p id="projetos"></p>
          <br />
          <h3>Projetos.</h3>
          <ContainerCards>
            <ColumnCards>{/*Left*/}
              <Card title="ELGScreen." text="Automação para atualizar o estoque do ERP, onde arquivos XML eram capturados via API, os erros nos arquivos eram corrigidos e, por fim, os dados eram enviados para o servidor do ERP. Projeto desenvolvido utilizando Python.">
                <CardTag text="API"><img src={apiIcon} alt="API ícone" /></CardTag>
                <CardTag text="Python"><img src={pythonIcon} alt="Python ícone" /></CardTag>
              </Card>
              <Card title="ELGScreen." text="Automação desenvolvida em Python para atualizar o status dos pedidos entregues no Mercado Livre, agilizando o processo de liberação de faturamento da empresa. A solução utiliza a API dos Correios para verificar o status de entrega dos pedidos e a API do Mercado Livre para atualizar os respectivos status.">
                <CardTag text="API"><img src={apiIcon} alt="API ícone" /></CardTag>
                <CardTag text="Python"><img src={pythonIcon} alt="Python ícone" /></CardTag>
              </Card>
              <Card title="Projeto pessoal." text="Este site também conta, certo? Neste projeto pratiquei mais habilidades front-end, usando HTML, CSS, TypeScript e o framework React. O protótipo do projeto foi feito no Figma e com base nele criado o código.">
                <CardTag text="HTML"><img src={htmlIcon} alt="HTML ícone" /></CardTag>
                <CardTag text="CSS"><img src={cssIcon} alt="CSS ícone" /></CardTag>
                <CardTag text="TypeScript"><img src={tsIcon} alt="TypeScript ícone" /></CardTag>
                <CardTag text="React"><img src={reactIcon} alt="React ícone" /></CardTag>
                <CardTag text="Figma"><img src={figmaIcon} alt="Figma ícone" /></CardTag>
              </Card>
            </ColumnCards>
            <ColumnCards>{/*Right*/}
              <Card title="G2." text="Desenvolvimento de uma integração entre o Service Desk Movidesk e o WhatsApp para envio de mensagens aos clientes, utilizando Python e a API do 360Dialog para a comunicação com o WhatsApp. A solução atualizava os clientes sobre seus tickets sempre que uma alteração de status era realizada. Para isso, foi criada uma API com FastAPI para receber os webhooks do Movidesk e enviar as mensagens automaticamente.">
                <CardTag text="API"><img src={apiIcon} alt="API ícone" /></CardTag>
                <CardTag text="Python"><img src={pythonIcon} alt="Python ícone" /></CardTag>
              </Card>
              <Card title="ELGScreen." text="Desenvolvimento de uma ferramenta para listar os produtos mais vendidos no Mercado Livre que a empresa não comercializa. Utilizando a API do Mercado Livre, foi gerada uma lista dos produtos mais vendidos em uma determinada categoria. Em seguida, foi realizada uma consulta ao banco de dados SQL Server da empresa para obter a lista de produtos vendidos na mesma categoria. Com o uso de expressões regulares e um framework de correspondência de texto, foi possível identificar correspondências superiores a 70% nos títulos. Os produtos mais vendidos do Mercado Livre que não estavam no portfólio da empresa foram exibidos em uma tabela na intranet, com imagens e links. A solução foi implementada com HTML, CSS e Python Django.">
                <CardTag text="API"><img src={apiIcon} alt="API ícone" /></CardTag>
                <CardTag text="Python"><img src={pythonIcon} alt="Python ícone" /></CardTag>
                <CardTag text="SQL Server"><img src={sqlserverIcon} alt="SQL Server ícone" /></CardTag>
                <CardTag text="HTML"><img src={htmlIcon} alt="HTML ícone" /></CardTag>
                <CardTag text="CSS"><img src={cssIcon} alt="CSS ícone" /></CardTag>
              </Card>
            </ColumnCards>
          </ContainerCards>
      </Section>
    );
};

export default ProjectsSection;