import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

// Register GSAP plugin
gsap.registerPlugin(TextPlugin)

interface UseGSAPTypingOptions {
  speed?: number
  delay?: number
  skip?: boolean
  cursor?: boolean
  cursorChar?: string
  onComplete?: () => void
}

export const useGSAPTyping = (text: string, options: UseGSAPTypingOptions = {}) => {
  const {
    speed = 0.05, // detik per karakter (0.05 = 50ms)
    delay = 0,
    cursor = true,
    cursorChar = '|',
    onComplete = () => { }
  } = options

  const elementRef = useRef<HTMLSpanElement>(null)
  const [isComplete, setIsComplete] = useState<boolean>(false)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const duration = text.length * speed

    // Typing animation
    const tl = gsap.timeline({
      delay,
      onComplete: () => {
        setIsComplete(true)
        onComplete()
      }
    })

    tl.to(element, {
      duration,
      text: {
        value: text,
        delimiter: '' // Character by character
      },
      ease: 'none'
    })

    // Cursor blink animation
    if (cursor) {
      const cursorElement = element.nextElementSibling
      if (cursorElement) {
        gsap.to(cursorElement, {
          opacity: 0,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        })
      }
    }

    return () => {
      tl.kill()
    }
  }, [text, speed, delay, cursor, onComplete])

  return { elementRef, isComplete }
}
