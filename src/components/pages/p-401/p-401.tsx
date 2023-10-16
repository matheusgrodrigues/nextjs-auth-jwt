export interface I_P401 {
  t_401Props: {
    handleLogin: () => void;
  };
}

export const P_401 = ({ t_401Props }: I_P401) => {
  return (
    <main data-testid="p-401">
      <T_401 />
    </main>
  );
};
