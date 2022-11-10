import { useGet } from 'restful-react'
import type { OpenapiGetContentOutput, TypesRepository } from 'services/scm'

interface UseGetResourceContentParams {
  repoMetadata: TypesRepository
  gitRef?: string
  resourcePath?: string
  includeCommit?: boolean
}

export function useGetResourceContent({
  repoMetadata,
  gitRef,
  resourcePath,
  includeCommit = false
}: UseGetResourceContentParams) {
  const { data, error, loading, refetch, response } = useGet<OpenapiGetContentOutput>({
    path: `/api/v1/repos/${repoMetadata.path}/+/content${resourcePath ? '/' + resourcePath : ''}`,
    queryParams: {
      include_commit: String(includeCommit),
      git_ref: gitRef
    }
  })

  return { data, error, loading, refetch, response }
}
