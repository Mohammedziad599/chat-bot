"use client";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuAction } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import { useAppSession } from "@/context/app-session-context";
import { MessageCircleIcon, PlusIcon, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AppSidebar = () => {
    const { sessions, activeSession, addNewSession, setActiveSession, removeSession } = useAppSession();
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <div className="flex items-center justify-between">

                    <Image className="group-data-[collapsible=icon]:hidden" src="/favicon.ico" alt="Logo" width={32} height={32} />
                    <SidebarTrigger />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Sessions</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sessions.map((session) => (
                                <SidebarMenuItem className="flex items-center justify-between gap-2" key={session.id}>
                                    <div className="flex-1">
                                        <SidebarMenuButton isActive={activeSession?.id === session.id} asChild>
                                            <Button 
                                            onClick={() => setActiveSession(session)} 
                                            variant={activeSession?.id === session.id ? "default" : "outline"}
                                            title={session.title}>
                                                <MessageCircleIcon className="size-4" />
                                                <span className="group-data-[collapsible=icon]:hidden">{session.title}</span>
                                            </Button>
                                        </SidebarMenuButton>
                                    </div>
                                    <div>
                                        <SidebarMenuButton className="group-data-[collapsible=icon]:hidden" isActive={false} asChild>
                                            <Button variant="destructive" onClick={() => removeSession(session.id)} title="Remove Session">
                                                <TrashIcon className="size-4" />
                                            </Button>
                                        </SidebarMenuButton>
                                    </div>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenuButton asChild>
                    <Button onClick={addNewSession} title="New Session">
                        <PlusIcon className="size-4" />
                        <span className="group-data-[collapsible=icon]:hidden">New Session</span>
                    </Button>
                </SidebarMenuButton>
            </SidebarFooter>
        </Sidebar>
    )
}