"use client";

import { ALabel, Avatar, Title } from "./components";

export default function Home() {
  return (
    <>
      <Avatar image="/images/a-avatar.jpeg" size="normal" shape="circle" />
      <Title variant="h1" label="NextJS: Auth + JWT" />
      <ALabel>ALabel</ALabel>
    </>
  );
}
