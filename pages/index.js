import Layout from "../components/client-layout/layout";

export default function HomePage(){
    return (<Layout>
        <div className="grid grid-cols-3 gap-4 min-h-screen bg-slate-50">
            <h1 className="p-5">This is a homepage</h1>
        </div>
        
    </Layout>)
}