import Link from 'next/link'
import Router from 'next/router'
import {GoChevronLeft, GoGear, GoSignOut } from 'react-icons/go'
import { signout } from '../../auth'
import { Layout, Header, Button} from '../../components'

export default () => (
	<Layout>
		<Header title="My account">
			<a onClick={() => Router.back()}>
				<GoChevronLeft />
				<span>Back</span>
			</a>
		</Header>
		<div className="account-details">
			<div className="avatar"/>
			<h2>First name</h2>
		</div>
		<div className="account-actions">
			<Button icon={<GoSignOut />} onClick={signout} color='var(--color-danger-900)'>Sign out</Button>
			<Link href="/account/settings">
				<Button icon={<GoGear />}>Account settings</Button>
			</Link>
		</div>
		<style jsx>
			{`
        a {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary-300);
          padding: 1.6rem;
        }

        a > :global(.icon) {
          height: 2rem;
          width: 2rem;
        }

        .account-details {
          flex: 1;
          display: flex; 
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 3.2rem;
        }

        .account-details > h2 {
           margin: 1.6rem;
        }

        .avatar {
          width: 9.6rem;
          height: 9.6rem;
          border-radius: 50%;
          background: var(--color-primary-300);
        }
        
        .account-actions {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        span {
          padding: 0.4rem;
        }

        :global(button) {
          margin-top: 1.6rem;
        }
    `}
		</style>
	</Layout>
)