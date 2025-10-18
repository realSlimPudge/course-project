import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/dark_theme.svg";
import LightIcon from "shared/assets/icons/light_theme.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const iconSize = 40;
  const iconColor = "yellow";

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <DarkIcon stroke={iconColor} width={iconSize} height={iconSize} />
      ) : (
        <LightIcon stroke={iconColor} width={iconSize} height={iconSize} />
      )}
    </Button>
  );
};
