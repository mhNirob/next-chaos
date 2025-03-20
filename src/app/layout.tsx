export default function RootLayout({ children }: {children: React.ReactNode}){
  return (
  <html>
    <body>
      <div className="bg-orange-300 h-full w-full">
      This is part of the layout
      <div className="bg-red-400 h-full w-full">
        {children}
      </div>
      </div>
    </body>
  </html>
  )
}
