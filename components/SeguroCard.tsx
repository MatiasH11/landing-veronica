import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SeguroCardProps {
  icon: React.ReactNode
  title: string
  description: string
  secondaryText?: string
  onClick?: () => void
}

export function SeguroCard({ icon, title, description, secondaryText, onClick }: SeguroCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center h-[400px] bg-card rounded-2xl p-8 transition-all border border-border",
        "hover:border-primary/50 hover:shadow-lg dark:bg-card/5 dark:backdrop-blur-sm dark:border-white/10",
        "cursor-pointer group"
      )}
    >
      <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/30 transition-colors">
        <span className="text-primary text-2xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-lg text-muted-foreground text-center mb-8 flex-grow">{description}</p>
      <div className="w-full mt-auto">
        <Button
          className="w-full bg-primary/10 hover:bg-primary text-foreground hover:text-primary-foreground font-semibold rounded-full py-6 text-base transition-all border border-primary/20 hover:border-primary dark:text-white dark:border-white/20"
          onClick={onClick}
        >
          Cotizar
        </Button>
        {secondaryText && (
          <div className="text-sm text-muted-foreground mt-4 text-center">{secondaryText}</div>
        )}
      </div>
    </div>
  )
} 