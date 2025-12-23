import { CheckIcon, Code2Icon } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuLink, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";

export function Header() {
    return (
        <header className="h-[50px] w-screen bg-white border-b flex flex-row items-center">
            <img src="/quntemdeveloper.svg" alt="Quntem Developer" className="h-[25px] w-auto ml-4" />
            <div className="h-[20px] w-[2px] bg-gray-300 mx-4" />
            <div className="qu-text">Universal Content Format</div>
            {/* <div className="flex-1"/> */}
            <NavigationMenu className="pr-2">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="px-3">For Developers</NavigationMenuTrigger>
                        <NavigationMenuContent className="w-[200px]">
                            <NavigationMenuLink className="w-[200px]">
                                <div className="flex flex-row items-center gap-2 font-medium qu-text">
                                    <CheckIcon className="qu-text" size={16}/>
                                    Benefits
                                </div>
                                <div className="qu-text-secondary">
                                    Explore why UCF is the best format for your software.
                                </div>
                            </NavigationMenuLink>
                            <NavigationMenuLink className="w-[200px]">
                                <div className="flex flex-row items-center gap-2 font-medium qu-text">
                                    <Code2Icon className="qu-text" size={16}/>
                                    Implementation
                                </div>
                                <div className="qu-text-secondary">
                                    Learn how to implement UCF in your software.
                                </div>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}