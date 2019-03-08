/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import palette from '../../../theme/colors'

interface StyleProps {
  compact?: boolean
}

const getGradientRule = (gradient: string) => {
  return `linear-gradient(-180deg, rgba(${gradient},1) 0%, rgba(255,255,255,1) 60%)`
}

export const StyledWrapper = styled<StyleProps, 'div'>('div')`
  height: 100%;
  padding: ${p => p.compact ? '0px 7px 0px' : '0px'};
  background: ${p => p.compact ? getGradientRule('233, 235, 255') : 'inherit'};
`

export const StyledInner = styled<StyleProps, 'div'>('div')`
  padding: 25px 14px 14px;
  font-family: Poppins, sans-serif;
`
export const StyledSummary = styled<{}, 'div'>('div')`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;
  letter-spacing: 0.4px;
  color: #a1a8f2;
  text-transform: uppercase;
`

export const StyledTitle = styled<{}, 'div'>('div')`
  font-size: 22px;
  font-weight: 300;
  line-height: 0.79;
  letter-spacing: 0.4px;
  color: #4C54D2;
  margin: 4px 0 26px;
  text-transform: uppercase;
`

export const StyledActivity = styled<{}, 'button'>('button')`
  font-size: 12px;
  color: #686978;
  margin-top: 26px;
  text-align: center;
  padding: 0;
  border: none;
  background: none;
  width: 100%;
  cursor: pointer;
`

export const StyledActivityIcon = styled<{}, 'span'>('span')`
  vertical-align: middle;
  margin-right: 11px;
  width: 22px;
  height: 24px;
  color: #A1A8F2;
  display: inline-block;
`

export const StyledNoActivityWrapper = styled<{}, 'div'>('div')`
  width: 100%;
  margin-top: 80px;
  text-align: center;
`

export const StyledNoActivity = styled<{}, 'span'>('span')`
  font-weight: 400;
  color: #B8B9C4;
  font-size: 18px;
`

export const StyledReservedWrapper = styled<{}, 'div'>('div')`
  background: rgba(0, 0, 0, 0.04);
  color: #676283;
  font-size: 12px;
  font-family: ${p => p.theme.fontFamily.body};
  font-weight: normal;
  letter-spacing: 0;
  line-height: 16px;
  padding: 10px 12px;
  border-radius: 4px;
  margin: 20px 0 10px;
`

export const StyledReservedLink = styled<StyleProps, 'a'>('a')`
  color: ${palette.blue400};
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
`
