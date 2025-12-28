import { Container } from "@/components/core/layout/Container"
import { colorStyles } from "@/utils/styles/colors"
import Link from "next/link"
import RovnoLogotype from "./core/data-display/RovnoLogotype"

export default function Header() {
	return (
		<div
			style={{
				paddingInline: "32px",
				paddingBlock: "24px",
				justifyContent: "center",
				width: "100%",
				border: `1px solid ${colorStyles.dark.background.border.default}`,
				backgroundColor: colorStyles.dark.background.card.default,
			}}
		>
			<Container
				variant='full-width'
			
			>
				<nav className="flex items-center justify-between">
          <div className=""></div>
					<Link href={"/"}>
						<RovnoLogotype height={50} />
					</Link>
					<ul className="flex gap-[72px] text-white">
            <li>
              <Link href={'/'}>Главная</Link>
            </li>
            <li>
              <Link href={'/generate'}>Сгенерировать</Link>
            </li>
          </ul>
				</nav>
			</Container>
		</div>
	)
}
