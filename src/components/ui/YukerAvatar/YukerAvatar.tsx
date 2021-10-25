import { useMemo, useState } from 'react'
import { useQuery } from '@apollo/client'

import { getAuthedYukerInfo } from '../../../api/queries'

export default function YukerAvatar () {
  const [userInitials, setUserInitials] = useState('')

  const { data, loading } = useQuery(getAuthedYukerInfo, {
    onCompleted: data => {
      const { firstName, lastName } = data.yuker.user
      setUserInitials(`${firstName[0]}${lastName[0]}`)
    }
  })

  const { firstName } = useMemo(() => data?.yuker?.user || '', [data])

  if (loading) return null

  return (
    <aside className='user-avatar'>
      <span
        className='user-avatar__image circle'
        data-user-initials={userInitials}
      ></span>
      <span className='user-avatar__name'>{firstName}</span>
    </aside>
  )
}
