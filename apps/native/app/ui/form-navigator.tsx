import { ButtonText } from "./button/index";
import { Button } from "./button/index";

export default function FormNavigator({ leftText, rightText, onPressLeft, onPressRight }: { leftText: string, rightText: string, onPressLeft: () => void, onPressRight: () => void }) {
    return (
        <Button className="w-full flex-row justify-between items-center">
            <ButtonText onPress={onPressLeft}>
                {leftText}
            </ButtonText>
            <ButtonText onPress={onPressRight}>
                {rightText}
            </ButtonText>
        </Button>
    )
}