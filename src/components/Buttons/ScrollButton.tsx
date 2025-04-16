import { useEffect, useState } from "react";
import { Button } from "@/components/Buttons/Button";
import { Svg } from "@/components/Optimizing/Svg";

export function ScrollButton() {
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    visible && (
      <Button
        onClick={scrollToTop}
        variant="secondary"
        rounded={true}
        aria-label="Button to scroll to the top"
        className="fixed right-7 bottom-7 z-50 size-10 backdrop-blur cursor-pointer"
      >
        <Svg
          variant="outline"
          width={16}
          height={16}
          draw={["M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"]}
        />
      </Button>
    )
  );
}
