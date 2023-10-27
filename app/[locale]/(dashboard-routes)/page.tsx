import ExampleClientComponent from "@/components/ClientComponent";
import ClientIntl from "@/components/ClientIntl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getLocale } from "@/utils";

export default async function Home({ params: { locale } }: any) {
  const intl = await getLocale(locale, "home");
  const lang = locale === "en" ? "English" : "العربية";

  return (
    <ClientIntl messages={intl.messages} locale={intl.locale}>
      <main>
        <LanguageSwitcher />
        <h1>{intl.formatMessage({ id: "title" })}</h1>
        {/* <p>{intl.formatMessage({ id: "language" }, { name: lang })}</p> */}
        <ExampleClientComponent lang={lang} />
      </main>
    </ClientIntl>
  );
}
