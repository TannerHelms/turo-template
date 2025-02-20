import { Input, InputSlot, InputIcon, InputField } from "./input";

import { LucideIcon, Mail } from "lucide-react-native"

export default function FormInput({ icon, classname, ...props }: { icon: LucideIcon, classname?: string }) {
    return (
        <Input
            {...props}
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            className={`rounded-md h-16 my-4 ${classname}`}
        >
            <InputSlot className="pl-3">
                <InputIcon className="h-15 w-15" as={icon} />
            </InputSlot>
            <InputField placeholder="Enter your email here..." />
        </Input>
    )
}