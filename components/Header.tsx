import { Container } from "@/components/core/layout/Container";
import RovnoLogotype from "./core/data-display/RovnoLogotype";
import { colorStyles } from "@/utils/styles/colors";
import Link from "next/link";

export default function Header() {
  return (
    <div
      style={{
        paddingInline: '32px',
        paddingBlock: '24px',
        justifyContent: 'center',
        width: '100%',
        border: `1px solid ${colorStyles.dark.background.border.default}`,
        backgroundColor: colorStyles.dark.background.card.default,
      }}
    >
      <Container
        variant="full-width"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link href={'/'}>
          <RovnoLogotype height={50} />
        </Link>
      </Container>
    </div >
  );
}
