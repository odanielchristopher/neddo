import 'reflect-metadata';

import 'dotenv/config';

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  pixelBasedPreset,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

import { env } from '@shared/config';

interface IVercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteDate?: string;
}

const baseUrl = env.API_URL;

export const InviteUserEmail = ({
  username,
  userImage,
  invitedByUsername,
  invitedByEmail,
  teamName,
  teamImage,
  inviteLink,
  inviteDate,
}: IVercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Preview>{previewText}</Preview>
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/public/neddo-logo.png`}
                width="40"
                height="40"
                alt="Neddo Logo"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Junte-se a(o) <strong>{teamName}</strong> pelo{' '}
              <strong>Neddo</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Olá {username},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong>{invitedByUsername}</strong> (
              <Link
                href={`mailto:${invitedByEmail}`}
                className="text-blue-600 no-underline"
              >
                {invitedByEmail}
              </Link>
              ) convidou você para a <strong>{teamName}</strong> no{' '}
              <strong>Neddo</strong>.
            </Text>
            <Section>
              <Row>
                <Column align="right">
                  <Img
                    className="rounded-full"
                    src={userImage}
                    width="64"
                    height="64"
                    alt={`${username}'s profile picture`}
                  />
                </Column>
                <Column align="center">
                  <Img
                    src={`${baseUrl}/public/right-arrow.png`}
                    sizes="32"
                    alt="Arrow indicating invitation"
                  />
                </Column>
                <Column align="left">
                  <Img
                    className="rounded-full"
                    src={teamImage}
                    width="64"
                    height="64"
                    alt={`${teamName} team logo`}
                  />
                </Column>
              </Row>
            </Section>
            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                className="rounded bg-[#8e51ff] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
                href={inviteLink}
              >
                Aceitar convite
              </Button>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Essse convite foi enviado a(o){' '}
              <span className="text-black">{username}</span> no dia{' '}
              <span className="text-black">{inviteDate}</span>. Se você não
              estava esperando esse convite, você pode ignorar esse email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

InviteUserEmail.PreviewProps = {
  username: 'Daniel Christopher',
  userImage: `https://github.com/odanielchristopher.png`,
  invitedByUsername: 'Baiana',
  invitedByEmail: 'tempero.baiana@mail.com',
  teamName: 'Tempero da Baiana',
  teamImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCT1ttb_WvO9XwM9CyRvwJd-D-jJSbJpNDeg&s`,
  inviteLink: 'https://neddo.com',
  inviteDate: '12/04/2025',
} as IVercelInviteUserEmailProps;

export default InviteUserEmail;
