/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../system/layout'
import { Button } from '@hummingbot/hbui/elements/buttons'
import { PageRoot, Section, Container } from '@hummingbot/hbui/elements/layout'
import Navigation from '../ui/components/Navigation'
import Hero from '../ui/components/instructions-page/Hero'
import Content from '../ui/components/instructions-page/Content'

const Instructions = () => (
  <Layout>
    <PageRoot>
      <Navigation />
      <Section>
        <Hero />
        <Content />
      </Section>
    </PageRoot>
  </Layout>
)

export default Instructions
