import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
const users = [
    {
        userName:'EdwinSteve',
        name: 'Edwin Steve Suarez Rivera',
        isFollowing: true,
    },
    {
        userName:'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: false,
    },
    {
        userName:'elonmusk',
        name: 'Elon Musk',
        isFollowing: false,
    },
    {
        userName:'billgates',
        name: 'Bill Gates',
        isFollowing: false,
    }
]

export function App() {
    
    return(
        <section className='App'>
        {
            users.map(({userName, name, isFollowing}) => (

                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>

        ))
        }
        </section>
    )

}