import { useState } from "react";
import { Input, InputSlot, InputIcon, InputField } from "./input";
import { KeyboardTypeOptions, StyleSheet } from "react-native";
import { LucideIcon, Mail } from "lucide-react-native"
import { colors } from "../utils/colors";

export default function FormInput({ value, setValue, icon, classname, keyboardType, placeholder, secureTextEntry, ...props }: { value: string, setValue(v: string): void, icon: LucideIcon, classname?: string, keyboardType?: KeyboardTypeOptions, placeholder?: string, secureTextEntry?: boolean }) {
    const [isFocused, setIsFocused] = useState(false)
    const borderColor = isFocused ? colors.primary : colors.deActivate
    console.log(borderColor)
    return (
        <Input
            {...props}
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            className={`rounded-md h-16 my-4`}
            style={{
                borderColor: borderColor
            }}
        >
            <InputSlot className="pl-3">
                <InputIcon className="h-15 w-15" as={icon} />
            </InputSlot>
            <InputField
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect={false}
                keyboardType={keyboardType}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.nativeEvent.text)}
                secureTextEntry={secureTextEntry}
            />
        </Input >
    )
}
