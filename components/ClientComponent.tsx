"use client";
import { FormattedMessage } from "react-intl";
// import { useIntl } from "react-intl";

export default function ExampleClientComponent({ lang }: { lang: string }) {
  console.log({ lang });
  //   const intl = useIntl();
  return (
    <h2>
      <FormattedMessage id="language" values={{ name: lang }} />
      {/* {intl.formatMessage({ id: "language" }, { name: lang })} */}
    </h2>
  );
}
