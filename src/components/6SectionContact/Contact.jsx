import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "../Shared/Section";
import Subtitle from "../Shared/Subtitle";
import GradientLine from "../Shared/GradientLine";
import Brief from "../Shared/Brief";

import Lottie from "react-lottie";
import contactJson from "../../lotties/contact4.json";
import messageJson from "../../lotties/message.json";
import Input from "./Input";
import Button from "../Shared/Button";

function Contact() {
  const [isSend, setIsSend] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const form = useRef(null);

  const handleSendEmail = async (e) => {
    e.preventDefault();

    setButtonClicked(true);

    emailjs
      .sendForm(
        "service_1aqik82",
        "template_f8g2d8r",
        form.current,
        "XeDaxKDYwvWpoAeQo"
      )
      .then((result) => {
        console.log(result.text);
        setIsSend(true);
        setTimeout(() => {
          setIsSend(false);
          setButtonClicked(false);
        }, 2500);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const contact = {
    loop: true,
    autoplay: true,
    animationData: contactJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const message = {
    loop: false,
    autoplay: true,
    animationData: messageJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Section className="mt-32" id="kontakt">
      <div className="self-start mb-10">
        <Lottie options={contact} height={180} width={200} />
      </div>
      <Subtitle>
        Zapraszam do kontaktu!
        <GradientLine />
      </Subtitle>
      <Brief>
        Jeśli masz pytania, chcesz omówić projekt lub nawiązać współpracę, bez
        wahania wypełnij poniższy formularz.
      </Brief>

      <form
        ref={form}
        className="mt-16 flex flex-col gap-12"
        onSubmit={handleSendEmail}
      >
        <Input
          name="user_name"
          title="Imię"
          invalidText="Jak mogę się do Ciebie zwracać?"
        />
        <Input
          name="user_email"
          title="Email"
          inputType="email"
          invalidText="Spokojnie, nie wyspamuję Cię. Wpisz swój email."
        />
        <Input
          name="message"
          title="Wiadomość"
          invalidText="Będę wdzięczny za podanie szczegółów w wiadomości."
          textarea
        />
        <Button
          className={buttonClicked ? "pointer-events-none bg-secondary/80" : ""}
        >
          Wyślij
        </Button>
        {isSend && (
          <div className="fixed z-40 top-10 right-1/2 translate-x-1/2 pointer-events-none">
            <Lottie options={message} width={350} />
          </div>
        )}
      </form>
    </Section>
  );
}

export default Contact;
