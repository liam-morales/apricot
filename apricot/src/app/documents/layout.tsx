
interface DocumentsLayoutProps {
    children : React.ReactNode;
}



const DocumentsLayout = ( {children}: DocumentsLayoutProps) => {
    return (
        
        <div className="flex flex-col gap-y-4">
            <p className="w=full bg-red-500">Document Navbar</p>
            {children}
        </div>
    );
}

export default DocumentsLayout;