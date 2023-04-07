import { formatDistanceToNow, fromUnixTime } from 'date-fns'

import { trpc } from '@/utils/trpc'

export default function New() {
  const { data } = trpc.newStories.useQuery()

  return (
    <div className="prose max-w-none">
      <h1>New Stories</h1>
      {data ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Points</th>
                <th>By</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, title, by, score, time, url }, index) => {
                return (
                  <tr key={id}>
                    <th>{index}</th>
                    <td>
                      <a
                        href={url}
                        className="link link-hover"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {title}
                      </a>
                    </td>
                    <td>{score}</td>
                    <td>{by}</td>
                    <td>{formatDistanceToNow(fromUnixTime(time))} ago</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <progress className="progress w-56" />
      )}
    </div>
  )
}
