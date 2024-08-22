import { Layout } from '../../components/Layout'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';




export const Home = () => {
    return (
        <Layout>
            <Box bgcolor="primary.main" sx={{ padding: '32px'}}>
                <Typography variant="h4" color="text.primary" sx={{ fontWeight: 'bold', textAlign: 'left'}}>O UNIVERSO NARUTO</Typography>
                <Box sx={{display: 'flex', marginTop: '12px'}}>
                    <Box style={{width: '50%'}}>
                        <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'lighter'}}>O universo de "Naruto" é vasto e complexo, oferecendo uma rica tapeçaria de mitologia, personagens e enredos que exploram temas profundos e universais. Criado por Masashi Kishimoto, o mundo de "Naruto" combina elementos de fantasia, artes marciais e drama, criando uma narrativa que cativa tanto fãs quanto estudiosos. Aqui está uma visão geral do universo de "Naruto":</Typography>
                        <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'bold'}}>1. Contexto e Ambientação</Typography>
                        <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'lighter'}}>O universo de "Naruto" é um mundo fictício que mistura elementos da cultura japonesa com uma visão única de ninjas e jutsus. A série se passa em um mundo medieval com tecnologia rudimentar, mas com habilidades sobrenaturais e uma sociedade altamente estruturada. Esse mundo é composto por vários países e aldeias, cada uma com suas próprias características e tradições.</Typography>           
                    </Box>
                    <Box style={{width: '50%'}}>
                        <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'bold'}}>2. Aldeias e Países</Typography>
                        <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'lighter'}}>Vilas Ninja: As principais vilas ninja são as aldeias que treinam e empregam ninjas para várias tarefas, desde missões de espionagem até batalhas em grande escala. As quatro aldeias principais são:</Typography>
                        <ul style={{fontSize: '14px'}}>
                            <li>Konohagakure (Vila Oculta da Folha): Localizada no País do Fogo, é a aldeia onde o protagonista, Naruto Uzumaki, cresce. É conhecida por suas técnicas poderosas e pela influência de seu líder, o Hokage.</li>
                            <li>Sunagakure (Vila Oculta da Areia): Localizada no País do Vento, é uma aldeia conhecida por suas técnicas de controle de areia e seu estilo de vida desértico.</li>
                            <li>Kirigakure (Vila Oculta da Névoa): Localizada no País das Neves, é famosa por suas técnicas de água e uma história de rivalidade e traição.</li>
                            <li>Kumogakure (Vila Oculta da Nuvem): Localizada no País das Nuvens, é conhecida por suas técnicas de eletricidade e sua força militar.</li>
                        </ul>           
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}