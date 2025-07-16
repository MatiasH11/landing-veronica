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
        "flex flex-col items-center min-h-[380px] sm:h-[420px] bg-card rounded-2xl p-4 sm:p-6 md:p-8 transition-all border border-border",
        "hover:border-primary/50 hover:shadow-lg dark:bg-card/5 dark:backdrop-blur-sm dark:border-white/10",
        "cursor-pointer group w-full"
      )}
    >
      <div className="mb-4 sm:mb-6 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/30 transition-colors">
        <span className="text-primary text-xl sm:text-2xl">{icon}</span>
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors text-center leading-tight">
        {title}
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center mb-4 sm:mb-6 md:mb-8 flex-grow leading-relaxed px-2">
        {description}
      </p>
      <div className="w-full mt-auto">
        <Button
          className="w-full bg-primary/10 hover:bg-primary text-foreground hover:text-primary-foreground font-semibold rounded-full py-3 sm:py-4 md:py-6 text-sm sm:text-base transition-all border border-primary/20 hover:border-primary dark:text-white dark:border-white/20"
          onClick={onClick}
        >
          Cotizar
        </Button>
        {secondaryText && (
          <div className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-4 text-center font-medium">
            {secondaryText}
          </div>
        )}
      </div>
    </div>
  )
} 