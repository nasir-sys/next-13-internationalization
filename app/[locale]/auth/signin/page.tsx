import ClientIntl from "@/components/ClientIntl";
import SigninCard from "@/components/auth/signin";
import { getLocale } from "@/utils";
import React from "react";

const SigninPage = async ({ params }: any) => {
  const { locale } = params;
  const intl = await getLocale(locale, "auth");

  return (
    <ClientIntl messages={intl.messages} locale={intl.locale}>
      <SigninCard />
    </ClientIntl>
  );
};

export default SigninPage;
