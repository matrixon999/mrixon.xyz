import Content from '@/components/Content'
import SideBar from '@/components/sidebar'
import Card from '@/components/Card'

export default function Home() {
  return (
    <main>
      <SideBar />
      <Content>
        <div className="page-header">
          <h1 className="pb-10">Mathew Rixon</h1>
          <p>Full stack developer with experience across web, mobile, desktop and embedded systems</p>
          <p>Experience with DevOps, Platform Engineering and System Administration in high volume environments (Education and Finance)</p>
          <p>Security, Automation and Performance focused</p>
        </div>
        <div className="flex items-start pt-20 justify-center bg-zinc-700">
          <div className="flex flex-col items-center bg-zinc-700">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <Card title="Programming Languages">
                <ul className="list-disc ml-5">
                  <li>C\C++</li>
                  <li>C#</li>
                  <li>Python</li>
                  <li>Javascript/Typescript</li>
                  <li>Rust</li>
                  <li>Terraform</li>
                </ul>
              </Card>
              <Card title="Technologies and Frameworks">
                <ul className="list-disc ml-5">
                  <li>React</li>
                  <li>NextJS</li>
                  <li>FastAPI</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Infrastructure as Code</li>
                  <li>Flutter</li>
                </ul>
              </Card>
              <Card title="Cloud Platform">
                <ul className="list-disc ml-5">
                  <li>GCP</li>
                  <li>AWS</li>
                  <li>Azure</li>
                  <li>Cloudflare</li>
                </ul>
              </Card>
              <Card title="Database Experience">
                <ul className="list-disc ml-5">
                  <li>SQL</li>
                  <li>Postgres</li>
                  <li>MSSQL</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>DynamoDB</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </Content>
    </main>
  )
}