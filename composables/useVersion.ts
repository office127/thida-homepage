export const useVersion = () => {
  // Get build time from environment or use current time
  const buildTime = process.env.BUILD_TIME || new Date().toISOString()
  
  // Get git commit hash if available
  const gitCommit = process.env.GIT_COMMIT || 'dev'
  
  // Get package version
  const packageVersion = process.env.npm_package_version || '1.0.0'
  
  // Format build time for display
  const formatBuildTime = (isoString: string) => {
    try {
      const date = new Date(isoString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch {
      return 'Unknown'
    }
  }
  
  // Get short commit hash (first 7 characters)
  const getShortCommit = (commit: string) => {
    return commit.length > 7 ? commit.substring(0, 7) : commit
  }
  
  // Build version string
  const versionString = `v${packageVersion}`
  const buildInfo = `${formatBuildTime(buildTime)} (${getShortCommit(gitCommit)})`
  
  return {
    version: versionString,
    buildTime: formatBuildTime(buildTime),
    gitCommit: getShortCommit(gitCommit),
    buildInfo,
    fullVersion: `${versionString} - ${buildInfo}`
  }
}
