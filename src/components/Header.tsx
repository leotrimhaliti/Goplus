import { GoldenEagleLogo } from "@/components/GoldenEagleLogo";

type Props = {};

export default function Header({ }: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <GoldenEagleLogo className="z-10 h-20 cursor-pointer" />
    </header>
  );
}
