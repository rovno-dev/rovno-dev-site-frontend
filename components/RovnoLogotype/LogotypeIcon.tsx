import { colorStyles } from "@/utils/styles/colors";
import { IconProps } from "@/utils/types";


export default function RovnoLogotypeIcon({ width = 62, height = 62, style }: IconProps) {
  return (
    <svg style={style} width={width} height={height} viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M62 0H0V62H62V0Z" fill={colorStyles.dark.text.primary.default} />
      <path d="M36.1611 49.7383V48.3944H38.7723V15.1029H36.1611V13.7383H40.1611V49.7383H36.1611Z"
        fill={colorStyles.dark.text.primary.inverse} />
      <path d="M25.3975 49.7383V48.3944H22.7863V15.1029H25.3975V13.7383H21.3975V49.7383H25.3975Z"
        fill={colorStyles.dark.text.primary.inverse} />
    </svg>
  );
}
