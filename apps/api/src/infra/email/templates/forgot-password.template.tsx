import {
  Column,
  Heading,
  Html,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface IForgotPasswordProps {
  confirmationCode: string;
}

export default function ForgotPassword({
  confirmationCode,
}: IForgotPasswordProps) {
  return (
    <Html>
      <Section>
        <Row>
          <Column
            style={{
              fontFamily: 'sans-serif',
              textAlign: 'center',
              paddingTop: 40,
            }}
          >
            <Heading
              as="h1"
              style={{
                letterSpacing: -0.5,
                lineHeight: 0,
                fontWeight: 700,
                fontSize: 24,
              }}
            >
              Recupere a sua conta
            </Heading>
            <Heading
              as="h2"
              style={{
                fontWeight: 'normal',
                color: '#A1A1AA',
                fontSize: 16,
                paddingTop: 40,
              }}
            >
              Um pedido de reconfiguração de senha foi feito para sua conta!
            </Heading>
            <Heading
              as="h2"
              style={{
                fontWeight: 'normal',
                color: '#A1A1AA',
                fontSize: 16,
              }}
            >
              Use o codigo abaixo para resetar a sua senha.
            </Heading>
          </Column>
        </Row>

        <Row>
          <Column
            style={{
              textAlign: 'center',
              paddingTop: 40,
            }}
          >
            <span
              style={{
                fontFamily: 'sans-serif',
                display: 'inline-block',
                paddingInline: 32,
                letterSpacing: 14,
                paddingBlock: 16,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 32,
                backgroundColor: '#ececec',
                borderRadius: 12,
              }}
            >
              {confirmationCode}
            </span>
          </Column>
        </Row>

        <Row>
          <Column
            style={{
              fontFamily: 'sans-serif',
              paddingTop: 40,
              textAlign: 'center',
              color: '#A1A1AA',
              fontSize: 16,
            }}
          >
            <Text
              style={{
                fontWeight: 'normal',
                color: '#A1A1AA',
                marginInline: 'auto',
                maxWidth: '300px',
                fontSize: 16,
              }}
            >
              Se você não solicitou essa troca, fique traquilo, sua conta
              continua segura!
            </Text>
          </Column>
        </Row>
      </Section>
    </Html>
  );
}

ForgotPassword.PreviewProps = {
  confirmationCode: '123456',
};
