import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  name: string;
  senderLanguage: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  name,
  senderLanguage,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{name} enviou uma mensagem através do site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                {name} enviou uma mensagem através do site
              </Heading>
              <Text>
                <b>Assunto: </b>
                {message}
              </Text>
              <Text>
                <b>Nivel do inglês: </b>
                {senderLanguage}
              </Text>
              <Hr />
              <Text>Email do remetente: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
