import { A_Button, A_Text, A_Title } from "@/components/atoms";

interface I_Welcome {
  username: string;
  handleLogout: () => void;
}

export const T_Welcome = ({ username, handleLogout }: I_Welcome) => {
  return (
    <main>
      <A_Text data-testid="a-text-welcome">Bem-vindo(a) ao nosso serviço !</A_Text>
      <A_Title data-testid="a-title-username" variant="h1">
        {username}
      </A_Title>
      <A_Text data-testid="a-text-description">
        Queremos que você se sinta em casa e aproveite ao máximo tudo o que oferecemos. Se tiver alguma dúvida ou
        precisar de ajuda, não hesite em nos chamar. Estamos sempre prontos para tornar sua experiência conosco
        incrível. Mais uma vez, bem-vindo(a)!
      </A_Text>
      <A_Button data-testid="a-button-logout" onClick={handleLogout}>
        Logout
      </A_Button>
    </main>
  );
};
